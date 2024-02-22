// Импортируем zod
import { z } from "zod";

// Определим схему нашего объекта
const schema = z.object({
    name: z.string().min(3), // поле name типа string с минимальной длинной в 3 символа
    email: z.string().email()
})

export default schema;