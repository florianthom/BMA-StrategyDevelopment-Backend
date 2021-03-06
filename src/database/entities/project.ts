import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
    JoinTable,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { UserMaturityModel } from "./userMaturityModel";
import { User } from "./user";
import { ConsistencyMatrix } from "./consistencyMatrix";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column("text", {
        nullable: true,
    })
    description: string;

    @ManyToOne(() => User, (user) => user.projects)
    user: User;

    @Column({ nullable: true })
    userId: number;

    @ManyToMany(() => UserMaturityModel, (maturityModel) => maturityModel.projects)
    @JoinTable()
    userMaturityModels: UserMaturityModel[];

    @OneToMany(() => ConsistencyMatrix, (consistencyMatrix) => consistencyMatrix.project)
    consistencyMatrices: ConsistencyMatrix[];

    @CreateDateColumn()
    created: Date;

    @Column()
    creator: string;

    @UpdateDateColumn()
    updated: Date;

    @Column()
    updater: string;
}
