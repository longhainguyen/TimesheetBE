import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { UserProjectModule } from './user-project/user-project.module';
import { dataSourceOptions } from 'db/data-source';
import { TaskModule } from './task/task.module';
import { ClientModule } from './client/client.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from './config/mailer.config';
import { FileModule } from './file/file.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [
        CacheModule.register({
            ttl: 60,
            max: 100,
            isGlobal: true,
        }),
        UsersModule,
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        TypeOrmModule.forRoot(dataSourceOptions),
        AuthModule,
        ProjectModule,
        UserProjectModule,
        TaskModule,
        ClientModule,
        TimesheetModule,
        MailerModule.forRootAsync(mailerConfig),
        FileModule,
        CloudinaryModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
