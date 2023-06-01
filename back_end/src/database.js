import mysql from 'mysql2/promise'
import { config } from './config'

export const connection = mysql.createPool(config);