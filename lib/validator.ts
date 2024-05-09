import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, { message: "Titulo debe ser mayor a 3 caracteres" }),
  description: z
    .string()
    .min(10, { message: "Descripcion debe ser mayor a 10 caracteres" })
    .max(1000, { message: "Descripcion debe ser menor a 1000 caracteres" }),
  location: z
    .string()
    .min(3, { message: "Locacion debe ser mayor a 3 caracteres" })
    .max(100, { message: "Locacion debe ser menor a 1000 caracteres" }),
  imageUrl: z.string().url({ message: "La url de la imagen no es valida" }),
  categoryId: z.string(),
  price: z.string().min(1, { message: "Debes ingresar un precio" }),
  isFree: z.boolean(),
  talle: z.string().min(1, { message: "Debes seleccionar un talle" }),
});
