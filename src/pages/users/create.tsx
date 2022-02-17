import { 
  Box, Button, Divider, Flex, Heading,
  HStack,
  SimpleGrid, VStack
} from "@chakra-ui/react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from "react-hook-form";


type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;

}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('name obrigatorio'),
  email: yup.string().required('Email obrigatorio').email('Formato invalido'),
  password: yup.string().required('Password obrigatorio').min(6, 'password no min. 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Password diferentes'),


})


export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState;

  const handleSCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
  }

  return(
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      
        <Box 
          as="form" 
          flex="1" 
          borderRadius={8} 
          bg="gray.800" 
          p={["6","8"]}
          onSubmit={handleSubmit(handleSCreateUser)}
        >

          <Heading size="lg" fontWeight="normal">Criar User</Heading>


          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8"> 
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input 
                name="name" 
                label="Nome Completo" 
                error={errors.name}
                {...register("name")}
              />
              <Input 
                name="email" 
                type="email"
                label="E-mail" 
                error={errors.email}
                {...register("email")}
              />

            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input 
                name="password" 
                type="password"
                label="password" 
                error={errors.password}
                {...register("password")}
              />

              <Input 
                name="password_confirmation" 
                type="password"
                label="Confima a sua password" 
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
              <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>

              <Button 
                type= "submit" 
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>  

            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}