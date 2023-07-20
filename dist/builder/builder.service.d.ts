import { Builder } from './models/builder.model';
import { createBuilderDto } from './dto/create-builder.dto';
export declare class BuilderService {
    private builderRepo;
    constructor(builderRepo: typeof Builder);
    createBuilder(createBuilderDto: createBuilderDto): Promise<Builder>;
    getAllBuilder(): Promise<Builder[]>;
    getBuilderById(id: number): Promise<Builder>;
    deleteBuilderById(id: number): Promise<number>;
}
