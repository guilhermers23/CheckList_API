import ListTestes from "../models/ListTestes.js";

const createTesteRepository = (system, functionality, descriptiontTest, userId) => {
    return ListTestes.create({ system, functionality, descriptiontTest, user: userId });
};

const findALLListTestRepository = () =>{
    return ListTestes.find()
}

export default {
    createTesteRepository,
    findALLListTestRepository
}
