import Prisma from '@prisma/client'
const prisma = new Prisma.PrismaClient();


const  insertSupplier= (dataInput)=>{

return new Promise( async (resolve,reject)=>{
    
await prisma.Supplier.findUnique({

    where:{
        phoneNumber:{
            countryCode:dataInput.countryCode,
            number:dataInput.number
        }
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
                    countryCode:dataInput.countryCode,
                    number: dataInput.number ,
                    address:dataInput.address  
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


const  findAllSuppliers= ()=>{

    return new Promise( async (resolve,reject)=>{
    
    await prisma.Supplier.findMany()
    .then(async (found) => { 
        if (found){
            await prisma.$disconnect();
            resolve(found) ;
        }else{
            await prisma.$disconnect();
            reject('no supplier in DB')
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



const  findSupplier= (id)=>{

    console.log(id)

    return new Promise( async (resolve,reject)=>{
    
    await prisma.Supplier.findUnique({
        where:{
            id:id
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
const phoneNumber=`${dataInput.countryCode}${dataInput.number}`;
console.log(phoneNumber)

return new Promise( async (resolve,reject)=>{
    
await prisma.Supplier.findUnique({
    
    where:{
        phoneNumber:{
            countryCode:dataInput.countryCode,
            number:dataInput.number
        }
    }
})
.then(async (found) => { 
    
    if (found){
        await prisma.Supplier.update({
            where:{
                id:found.id
            },
            data:{
                address:dataInput.address 
            }
        }).then(async(updatedSupplier) => { 
            await prisma.$disconnect();
            resolve( updatedSupplier) ; 
        })
            
    }else{
        await prisma.$disconnect();
        reject('supplier to update not found')
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


const  deleteFromDbSupplier= (id)=>{
console.log(id)
return new Promise( async (resolve,reject)=>{
    
await prisma.Supplier.findUnique({
    
    where:{
        id:id
    }
})
.then(async (found) => { 
    
    if (found){
        await prisma.Supplier.delete({
            where:{
                id:id
            }
        }).then(
            async (supplier) => {  
            await prisma.$disconnect();
            resolve(supplier) ; 
        }).catch(async (error) => { 
            await prisma.disconnect();
            reject(error)
            })
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




    

export {insertSupplier, deleteFromDbSupplier, updateInDbSupplier,findSupplier, findAllSuppliers};