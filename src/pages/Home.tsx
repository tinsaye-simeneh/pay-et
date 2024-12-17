import React from "react";
import {
  Card,
  Group,
  Text,
  Button,
  Container,
  SimpleGrid,
} from "@mantine/core";
import {
  FaPlane,
  FaBus,
  FaHome,
  FaPhone,
  FaQrcode,
  FaBell,
} from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { MdCallReceived } from "react-icons/md";

const Home: React.FC = () => {
  return (
    <Container className="max-w-xs p-5 mx-auto mt-4">
      <div className="flex items-center justify-between mx-auto my-5 mt-4 space-x-4 text-center">
        <button className="flex items-center p-2 text-white border-none rounded">
          <FaQrcode color="black" />
        </button>
        <button className="flex items-center p-2 text-white border-none rounded">
          <FaBell color="black" />
        </button>
      </div>

      <Card padding="lg" className="mb-6">
        <Card.Section>
          <div className="p-4 text-left bg-green-500 rounded-md pt-14">
            <p className="text-white"> Balance</p>
            <p className="text-3xl text-white">12,000,34.00 ETB</p>
            <p size="xs" className="mt-5 text-right text-white">
              20%
            </p>
          </div>
        </Card.Section>

        <p className="mt-6 text-gray-700 text-md">QUICK ACTIONS</p>
        <Group position="center" className="mx-auto mt-4 text-center">
          <button
            variant="outline"
            size="xs"
            className="flex flex-col items-center justify-center p-3 text-xs text-gray-700 bg-white border border-gray-100 rounded shadow-lg"
          >
            <CiCirclePlus size={25} />
            <p className="mt-2">DEPOSIT</p>
          </button>

          <button
            variant="outline"
            size="xs"
            className="flex flex-col items-center justify-center p-3 text-xs text-gray-700 bg-white border border-gray-100 rounded shadow-lg"
          >
            <FaBus />
            <p className="mt-2"> WITHDRAW</p>
          </button>
          <button
            variant="outline"
            size="xs"
            className="flex flex-col items-center justify-center p-3 text-xs text-gray-700 bg-white border border-gray-100 rounded shadow-lg"
          >
            <IoIosSend size={20} />
            <p className="mt-2"> SEND</p>
          </button>
          <button
            variant="outline"
            size="xs"
            className="flex flex-col items-center justify-center p-3 text-xs text-gray-700 bg-white border border-gray-100 rounded shadow-lg"
          >
            <MdCallReceived size={20} />
            <p className="mt-2">RECEIVE</p>
          </button>
        </Group>
      </Card>

      <Card shadow="sm" padding="lg">
        <Text weight={500} className="mb-4 text-center text-gray-700">
          PAY WITH PAYET
        </Text>
        <SimpleGrid cols={2} spacing="md">
          <Button
            variant="light"
            fullWidth
            className="flex items-center mb-2 text-green-600 bg-green-100"
          >
            <FaPlane /> Ethiopian Airlines
          </Button>
          <Button
            variant="light"
            fullWidth
            className="flex items-center mb-2 text-green-600 bg-green-100"
          >
            <FaBus /> Yegna Bus Ticket
          </Button>
          <Button
            variant="light"
            fullWidth
            className="flex items-center mb-2 text-green-600 bg-green-100"
          >
            <FaHome /> ELPA
          </Button>
          <Button
            variant="light"
            fullWidth
            className="flex items-center mb-2 text-green-600 bg-green-100"
          >
            <FaPhone /> Wuha Limat
          </Button>
          <Button
            variant="light"
            fullWidth
            className="flex items-center mb-2 text-green-600 bg-green-100"
          >
            <FaPhone /> EthioTelecom Com
          </Button>
          <Button
            variant="light"
            fullWidth
            className="flex items-center text-green-600 bg-green-100"
          >
            <FaPhone /> Safaricom Commu
          </Button>
        </SimpleGrid>
      </Card>
    </Container>
  );
};

export default Home;
