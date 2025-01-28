import {Sequelize} from 'sequelize'
import {DBGC} from '../env'

const sequelize = new Sequelize(DBGC, {logging:false})

export {Sequelize, sequelize}