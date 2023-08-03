import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { response } from 'express';

describe('User (e2e)', () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'ADMI1@gmail.com', password: '1231$As' });
    token = response.body.token;
    console.log(token);
  });
  it('/users (GET) --> 200 OK', () => {
    return request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('/users (GET) --> 401 "Unauthorized" error', () => {
    return (
      request(app.getHttpServer())
        .get('/users')
        // .set('Authorization', `Bearer ${token}`)
        .expect('Content-Type', /json/)
        .expect(401)
    );
  });

  it('auth/registration (POST) --> 201', async () => {
    return request(app.getHttpServer())
      .post('/auth/registration')
      .send({
        name: 'Admin2',
        email: 'ADMI2@gmail.com',
        password: '1231$As',
        is_active: true,
      })
      .expect('Content-type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchObject({ token: expect.any(String) });
      });
  });
  it('auth/registration (POST) --> 400', async () => {
    return request(app.getHttpServer())
      .post('/auth/registration')
      .send({
        name: 'Admin2',
        email: 'ADMI2@gmail.com',
        password: '1231$As',
        is_active: true,
      })
      .expect('Content-type', /json/)
      .expect(400)
      .expect({
        statusCode: 400,
        message: 'Bunday foydalanovchi mavjud',
      });
  });
  it('auth/registration (POST) --> 400', async () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        name: 'Admin2',
        email: 'ADMI2@gmail.com',
        password: '123',
        // is_active: true,
      })
      .expect('Content-type', /json/)
      .expect(400)
      .expect({
        statusCode: 400,
        message: 'password is not strong enaugh',
      });
  });

  // it('auth');
  afterAll(async () => {
    await app.close();
  });
});
