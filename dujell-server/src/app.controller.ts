import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import * as path from 'path';
import * as sqlite from 'sqlite3';
@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); // Response from the server
  }

  @Post('login')
  postLogin(@Req() req: Request, @Res() res: Response): any {
    const db = new sqlite.Database(path.join(__dirname, 'db', 'users.db'));
    const { username, password } = req.body;
    console.log('from client: ', req.body);
    

    function callbackFunction(err: any, rows: any) {
      if (err) return console.log('err occurred');
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        console.log({dbusername: row.username, username});
        
        if (row.username === username && row.password === password) {
          return res.status(200).send(JSON.stringify('{"message": "ok"}'));
        }
      }

      return res.status(500).send(JSON.stringify('{"message": "error"}'));
    }

    db.all('SELECT * from users', callbackFunction);
  }
}
