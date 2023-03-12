import userResolvers from "./user";
import merge from "lodash.merge";

// const resolvers = { userResolvers };
const resolvers = merge({}, userResolvers);

export default resolvers;
