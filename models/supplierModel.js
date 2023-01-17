import Prisma from '@prisma/client'


/** Instantiate Prisma client */
const prisma = new Prisma.PrismaClient();


const  insertSupplier= (dataInput)=>{

return new Promise( async (resolve,reject)=>{

await prisma.Supplier.findUnique({

    where:{
        name:dataInput.name
    }
})
.then(async (found) => { 

    console.log(found)
    if (!found){
        const newSupplier= await prisma.Supplier.create({
            data:{
                    name:dataInput.name,
                    contact:dataInput.contact,
                    email:dataInput.email,
                    phone_num:dataInput.phone_num,
                    address: dataInput.address ,  
                },
            });
        console.log('supplier added')
        await prisma.$disconnect();    
        resolve(newSupplier)    

    }else{
        await prisma.$disconnect();
        reject('supplier already exist');
    }
 }
)
.catch(
    async(err) => {
        console.log('cant create field '+err);
        await prisma.$disconnect()
        reject('error')
    }
)

})}

const  findSupplier= (dataInput)=>{

    return new Promise( async (resolve,reject)=>{
    
    await prisma.Supplier.findUnique({
    
        where:{
            name:dataInput.name
        }
    })
    .then(async (found) => { 
    
        console.log(found)
        if (found){
            await prisma.$disconnect();
            resolve(found) ;
        }else{
            await prisma.$disconnect();
            reject('supplier not found')
        }
    }
    )
    .catch(
        async(err) => {
            console.log('system error'+err);
            await prisma.$disconnect()
            reject('system error')
        }
    )
})}  


const  updateInDbSupplier= (dataInput)=>{

    return new Promise( async (resolve,reject)=>{
    
    await prisma.Supplier.findUnique({
    
        where:{
            name:dataInput.name
        }
    })
    .then(async (found) => { 
    
        if (found){
            await prisma.Supplier.update({
                where:{
                    name:found.name
                },
                data:{
                    address:dataInput.address
                   
                }
            });
            await prisma.$disconnect();
            resolve( inputData) ;
        }else{
            await prisma.$disconnect();
            reject('wanted supplier to update not found')
        }
    }
    )
    .catch(
        async(err) => {
            console.log('system error'+err);
            await prisma.$disconnect()
            reject('system error')
        }
    )
})}  


const  deleteFromDbSupplier= (dataInput)=>{

    return new Promise( async (resolve,reject)=>{
    
    await prisma.Supplier.findUnique({
    
        where:{
            name:dataInput.name
        }
    })
    .then(async (found) => { 
    
        console.log(found)
        if (found){
            await prisma.Supplier.delete({
                where:{
                    name:found.name
                }
            })
            await prisma.$disconnect();
            resolve(found) ;
        }else{
            await prisma.$disconnect();
            reject('wanted supplier to delete not found')
        }
    }
    )
    .catch(
        async(err) => {
            console.log('system error'+err);
            await prisma.$disconnect()
            reject('system error')
        }
    )
})} 




    

export {insertSupplier, deleteFromDbSupplier, updateInDbSupplier,findSupplier};