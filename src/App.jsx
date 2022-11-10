import React, { useState, useEffect } from "react";
import {
  Container,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Text,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

const App = () => {
  const [cantidadCaracteres, setCantidadCaracteres] = useState(8);
  const [simbolo, setSimbolo] = useState(false);
  const [numeros, setNumeros] = useState(false);
  const [mayus, setMayus] = useState(false);

  const [generar, setGenerar] = useState({});

  const [passwordFinal, setPasswordFinal] = useState("");

  useEffect(() => {
    setGenerar({
      ...generar,
      cantidadCaracteres: cantidadCaracteres,
      simbolo: simbolo,
      numeros: numeros,
      mayus: mayus,
    });
  }, [cantidadCaracteres, simbolo, numeros, mayus]);

  const handleSubmit = (e) => {
    e.preventDefault();

    configPasswordGenerator(generar);
  };

  const configPasswordGenerator = (pass) => {
    /* if (pass) {
      setCantidadCaracteres(8);
      setSimbolo(false);
      setNumeros(false);
      setMayus(false);
    } */

    const caracteres = {
      numeros: "0 1 2 3 4 5 6 7 8 9",
      simbolo: "! @ _ - .",
      /* simbolo: "! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /", */
      mayus: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
      minus: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
    };

    let caracteresFinales = "";
    let password = "";

    for (let propiedad in pass) {
      if (pass[propiedad] === true) {
        caracteresFinales += caracteres[propiedad] + " ";
      }
    }

    caracteresFinales += caracteres.minus;
    caracteresFinales = caracteresFinales.trim();

    caracteresFinales = caracteresFinales.split(" ");

    for (let i = 0; i < pass.cantidadCaracteres; i++) {
      password +=
        caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
    }

    setPasswordFinal(password);
    /* return password; */
  };

  return (
    <>
      <Stack w="full" h="full" bgColor="#222831" color="whiteAlpha.900">
        <Container w="full" h="full" maxW="container.lg">
          <Stack
            w="full"
            h="full"
            alignItems="center"
            justifyContent="center"
            spacing={10}
          >
            <Stack spacing={5}>
              <Heading>Easy password :P</Heading>
              {passwordFinal ? (
                <Text
                  p={2}
                  border="1px solid #22c35e50"
                  borderRadius={5}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#f4f4f4"
                >
                  {passwordFinal}
                </Text>
              ) : null}
            </Stack>

            <FormControl as="form" onSubmit={handleSubmit}>
              <Stack w="full" h="full" alignItems="center" spacing={5}>
                {/* Cantidad de caracteres */}
                <Stack direction="row" alignItems="center" spacing={10}>
                  <FormLabel m={0}>Cantidad de caracteres:</FormLabel>

                  <Stack direction="row" alignItems="center">
                    {cantidadCaracteres <= 1 ? (
                      <Button colorScheme="primary" disabled>
                        -
                      </Button>
                    ) : (
                      <Button
                        colorScheme="primary"
                        onClick={() =>
                          setCantidadCaracteres(
                            (cantidadCaracteres) => cantidadCaracteres - 1
                          )
                        }
                      >
                        -
                      </Button>
                    )}
                    <Text>{cantidadCaracteres}</Text>
                    {cantidadCaracteres >= 20 ? (
                      <Button colorScheme="primary" disabled>
                        +
                      </Button>
                    ) : (
                      <Button
                        colorScheme="primary"
                        onClick={() =>
                          setCantidadCaracteres(
                            (cantidadCaracteres) => cantidadCaracteres + 1
                          )
                        }
                      >
                        +
                      </Button>
                    )}
                  </Stack>
                </Stack>

                {/* ¿Le ponemos numeros? */}
                <Stack direction="row" alignItems="center" spacing={10}>
                  <FormLabel m={0}>¿Le ponemos numeros?</FormLabel>{" "}
                  <Button
                    colorScheme={numeros ? "primary" : "red"}
                    onClick={() => setNumeros(!numeros)}
                  >
                    {numeros ? "SI" : "NO"}
                  </Button>
                </Stack>

                {/* ¿Le ponemos simbolos? */}
                <Stack direction="row" alignItems="center" spacing={10}>
                  <FormLabel m={0}>¿Le ponemos simbolos?</FormLabel>{" "}
                  <Button
                    colorScheme={simbolo ? "primary" : "red"}
                    onClick={() => setSimbolo(!simbolo)}
                  >
                    {simbolo ? "SI" : "NO"}
                  </Button>
                </Stack>

                {/* ¿Le ponemos Mayúsculas? */}
                <Stack direction="row" alignItems="center" spacing={10}>
                  <FormLabel m={0}>¿Le ponemos Mayúsculas?</FormLabel>{" "}
                  <Button
                    colorScheme={mayus ? "primary" : "red"}
                    onClick={() => setMayus(!mayus)}
                  >
                    {mayus ? "SI" : "NO"}
                  </Button>
                </Stack>

                <Button
                  type="submit"
                  colorScheme="primary"
                  variant="outline"
                  w="full"
                  maxW="300px"
                >
                  Generar
                </Button>
              </Stack>
            </FormControl>
          </Stack>
        </Container>
        <marquee style={{ padding: "0px 0px 40px 0px", color: "#f4f4f450" }}>
          Password generator by{" "}
          <a
            href="https://nicoschonfeld.vercel.app/"
            target="_blank"
            style={{ color: "#a8a8ec" }}
          >
            @NicoSchonfeld
          </a>
        </marquee>
      </Stack>
    </>
  );
};

export default App;
