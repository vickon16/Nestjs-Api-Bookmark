import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: number, dto: EditUserDto) {
    const currentUser = await this.prisma.users.findUnique({
      where: { id: userId },
    });

    if (!currentUser) {
      throw new NotFoundException('User not found');
    }

    const user = await this.prisma.users.update({
      where: { id: userId },
      data: dto,
    });

    delete user.hashedPassword;
    return user;
  }
}
