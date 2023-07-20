import { CompanyService } from './company.service';
import { createCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompany(createCompanyDto: createCompanyDto): Promise<Company>;
    getAllCompany(): Promise<Company[]>;
    getCompanyById(id: string): Promise<Company>;
    getCompanyByName(name: string): Promise<Company>;
    deleteCompanyById(id: string): Promise<number>;
    updateCompany(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
}
