import { Branch } from 'src/constant/enum/branch.enum';
import { Role } from 'src/constant/enum/role.enum';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true })
    userName: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false, type: 'enum', enum: Role, default: Role.USER })
    role: string;

    @Column({ nullable: false, type: 'enum', enum: Branch, default: Branch.HN1 })
    branch: string;

    @Column({ nullable: false, default: true })
    isActive: boolean;

    @CreateDateColumn({ nullable: false, type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ nullable: false, type: 'timestamp' })
    updateAt: Date;

    @Column({ type: 'int', nullable: true })
    manageId: number;
}