import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './models/post.models';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private readonly fileService: FilesService,
  ) {}
  async create(createPostDto: CreatePostDto, image: any) {
    console.log(image);
    const fileName = await this.fileService.createFiles(image);
    const post = await this.postRepository.create({
      ...createPostDto,
      image: fileName,
    });
    return post;
  }
}
