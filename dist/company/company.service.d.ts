import { Company } from './models/company.model';
import { createCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyService {
    private companyRepo;
    constructor(companyRepo: typeof Company);
    createCompany(createCompanyDto: createCompanyDto): Promise<Company>;
    getAllCompany(): Promise<Company[]>;
    getCompanyByName(name: string): Promise<Company>;
    getCompanyById(id: number): Promise<Company>;
    deleteCompanyById(id: number): Promise<number>;
    updateCompany(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
}
