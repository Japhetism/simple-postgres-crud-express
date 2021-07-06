const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fintech',
  password: 'password',
  port: 5432,
})
const getUsers = (request: any, response: any) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error: any, results: any) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request: any, response: any) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error: any, results: any) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request: any, response: any) => {
  const { firstname, lastname, email, phone, password } = request.body

  pool.query('INSERT INTO users (firstname, lastname, email, phone, password) VALUES ($1, $2, $3, $4, $5)', [firstname, lastname, email, phone, password], (error: any, results: any) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const updateUser = (request: any, response: any) => {
  const id = parseInt(request.params.id)
  const { firstname, lastname, email, password, phone } = request.body

  pool.query(
    'UPDATE users SET firstname = $1, lastname = $2, email = $3, password = $4, phone = $5 WHERE id = $6',
    [firstname, lastname, email, password, phone, id],
    (error: any, results: any) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request: any, response: any) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error: any, results: any) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}