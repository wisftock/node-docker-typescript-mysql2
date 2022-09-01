import { Request, Response } from 'express';
import { ResultSetHeader, OkPacket, RowDataPacket, FieldPacket } from 'mysql2';
import { connection } from '../database/mysql.config';
import { HttpResponse } from '../domain/response';
import { Code, Status } from '../enum';
import { User } from '../interfaces/user';
import { QUERY_USER } from '../query';

type ResultSet = [
  RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader,
  FieldPacket[]
];

// const getUsers = async (
//   req: Request,
//   rep: Response
// ): Promise<Response<User[]>> => {
//   console.info(
//     `[${new Date().toLocaleString()}] Incoming ${req.method}${
//       req.originalUrl
//     } request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`
//   );

//   try {
//     const pool = await connection();
//     console.log('pool', pool);

//     const result: ResultSet = await pool.query(QUERY_USER.SELECT_USERS);
//     console.log('result', result);

//     return rep
//       .status(Code.OK)
//       .send(
//         new HttpResponse(Code.OK, Status.OK, 'list of the users', result[0])
//       );
//   } catch (error: unknown) {
//     console.log('error =>', error);

//     return rep
//       .status(Code.OK)
//       .send(
//         new HttpResponse(
//           Code.INTERNAL_SERVER_ERROR,
//           Status.INTERNAL_SERVER_ERROR,
//           'an error ocurred'
//         )
//       );
//   }
// };

const getUsers = async (
  req: Request,
  res: Response
): Promise<Response<User[]>> => {
  console.info(
    `[${new Date().toLocaleString()}] Incoming ${req.method}${
      req.originalUrl
    } Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`
  );
  try {
    const pool = await connection();
    const result: ResultSet = await pool.query(QUERY_USER.SELECT_USERS);
    return res
      .status(Code.OK)
      .send(
        new HttpResponse(Code.OK, Status.OK, 'Patients retrieved', result[0])
      );
  } catch (error: unknown) {
    console.error(error);
    return res
      .status(Code.INTERNAL_SERVER_ERROR)
      .send(
        new HttpResponse(
          Code.INTERNAL_SERVER_ERROR,
          Status.INTERNAL_SERVER_ERROR,
          'An error occurred'
        )
      );
  }
};

export { getUsers };
