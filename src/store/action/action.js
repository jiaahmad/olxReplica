export const createAdd = (add) =>{
    return (dispatch , getState , { getFirebase , getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...add,
            userID : 36457,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"create_add",add:add})
        }).catch((err)=>{
            dispatch({type:"create_add_error",err})
        })

        
    }
};

export const createAddmobile = (adm) =>{
    return (dispatch , getState , { getFirebase , getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('mobilephone').add({
            ...adm,
            
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"create_add",add:adm})
        }).catch((err)=>{
            dispatch({type:"create_add_error",err})
        })

        
    }
};

export const createAddhouse = (adm) =>{
    return (dispatch , getState , { getFirebase , getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('house').add({
            ...adm,
            
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"create_add",add:adm})
        }).catch((err)=>{
            dispatch({type:"create_add_error",err})
        })

        
    }
};

export const createAddcar = (adm) =>{
    return (dispatch , getState , { getFirebase , getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('cars').add({
            ...adm,
            
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"create_add",add:adm})
        }).catch((err)=>{
            dispatch({type:"create_add_error",err})
        })

        
    }
};

export const createAddtvaudio = (adm) =>{
    return (dispatch , getState , { getFirebase , getFirestore }) => {
        
        const firestore = getFirestore();
        firestore.collection('tvaudiovideo').add({
            ...adm,
            
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"create_add",add:adm})
        }).catch((err)=>{
            dispatch({type:"create_add_error",err})
        })

        
    }
};

export const createAddplot = (adm) =>{
    return (dispatch , getState , { getFirebase , getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('landandplots').add({
            ...adm,
            
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"create_add",add:adm})
        }).catch((err)=>{
            dispatch({type:"create_add_error",err})
        })

        
    }
};

export const createAddmotorcycle = (adm) =>{
    return (dispatch , getState , { getFirebase , getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('motorcycles').add({
            ...adm,
            
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"create_add",add:adm})
        }).catch((err)=>{
            dispatch({type:"create_add_error",err})
        })

        
    }
};