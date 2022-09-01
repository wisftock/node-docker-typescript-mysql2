export const QUERY_USER = {
  SELECT_USERS: 'SELECT * FROM users ORDER BY createdAt DESC LIMIT 50',
  SELECT_USER: 'SELECT * FROM users WHERE id = ?',
  CREATE_USER:
    'INSERT INTO user (first_name, last_name, email, address, phone, status, image_url, role) VALUES(?,?,?,?,?,?,?,?)',
  UPDATE_USER:
    'UPDATE users SET first_name=?, last_name=?, email=?, address=?, phone=?, status=?, image_url=? WHERE id = ?',
  DELETE_USER: 'DELETE * FROM users WHERE id = ?',
};
