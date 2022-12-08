

module.exports= (sequelize,DataTypes)=>{
    const Location = sequelize.define("Location",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          
          region_id:{
            type: DataTypes.INTEGER
        },
        name:{
            type:DataTypes.STRING
        }
       


    })
    return Location
}

