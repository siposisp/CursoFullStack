import { Table, Column, Model, DataType, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';

//
//Este archivo es como si fuera un archivo @Entity de java
//

//Un decorador es una funcion que modifica el comportamiento de una clase
//budget es el nombre de la tabla en la base de datos
//budgets son los presupuestos
@Table({
    tableName: 'budgets',
    //timestamps: true,
})

//@Column sirve para definir las columnas de la tabla
//las columnas son los atributos de la tabla
class Budget extends Model {
    @Column({
        type: DataType.STRING(100),
    })
    name: string;

    @Column({
        type: DataType.DECIMAL,
    })
    amount: number;
}

export default Budget;
