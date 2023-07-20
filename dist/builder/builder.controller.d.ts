import { BuilderService } from './builder.service';
import { createBuilderDto } from '../builder/dto/create-builder.dto';
import { Builder } from './models/builder.model';
export declare class BuilderController {
    private readonly builderService;
    constructor(builderService: BuilderService);
    createBuilder(createBuilderDto: createBuilderDto): Promise<Builder>;
    getAllBuilder(): Promise<Builder[]>;
    getBuilderById(id: string): Promise<Builder>;
    deleteBuilderById(id: string): Promise<number>;
}
