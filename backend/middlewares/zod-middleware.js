const {z} = require('zod');

const createUserSchema = z.object({
  restaurantName:z.string().min(1),
  restaurantNumber: z.coerce.string().min(5),
});