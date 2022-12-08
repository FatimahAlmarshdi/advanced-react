const Sequelize =require('sequelize');
const Op = Sequelize.Op;
const db =require('../../databases/database')
const Location= db.Location


module.exports={
    getlocationByID:async(args,req)=>{
      try{
        return await Location.findOne({
           attributes:{
               exclude:['']
            },
            where:{
              id: args.id
            }
        });
      }catch(err){
        throw err;
      }
    },

    getAllLocation:async(args,req)=>{
        try{
            return await  Location.findAll();
        }catch(err){
            throw err;
        }
    },



}
  