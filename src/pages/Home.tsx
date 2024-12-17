import React from "react";
import { Card, Group, Text, Container, SimpleGrid } from "@mantine/core";
import {
  FaHome,
  FaQrcode,
  FaBars,
  FaMapMarkerAlt,
  FaUserCircle,
} from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosSend, IoIosNotificationsOutline } from "react-icons/io";
import { MdCallReceived } from "react-icons/md";
import { PiHandWithdrawFill } from "react-icons/pi";

const Home: React.FC = () => {
  return (
    <Container className="max-w-xs p-5 mx-auto mt-4">
      <div className="flex items-center justify-between mx-auto my-5 mt-4 space-x-4 text-center">
        <button
          className="flex items-center p-2 text-white border-none rounded"
          onClick={() => window.location.replace("/qr-scan")}
        >
          <FaQrcode color="black" />
        </button>
        <button className="flex items-center p-2 text-white border-none rounded">
          <IoIosNotificationsOutline color="black" />
        </button>
      </div>

      <Card padding="lg" className="mb-4">
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
            <CiCirclePlus size={20} />
            <p className="mt-2">DEPOSIT</p>
          </button>

          <button
            variant="outline"
            size="xs"
            className="flex flex-col items-center justify-center p-3 text-xs text-gray-700 bg-white border border-gray-100 rounded shadow-lg"
          >
            <PiHandWithdrawFill size={20} />
            <p className="mt-2"> WITHDRAW</p>
          </button>
          <button
            onClick={() => window.location.replace("/qr-scan")}
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

      <Card shadow="sm" padding="lg" className="mb-20">
        <Text weight={500} className="mb-4 text-left text-gray-700">
          PAY WITH
          <span className="ml-1 text-green-500">PAYET</span>
        </Text>
        <p className="mt-2 mb-4 text-sm text-gray-500">Transportation</p>
        <SimpleGrid cols={2} spacing="md">
          <button fullWidth className="flex items-center mb-2 ">
            <img
              src="/air.png"
              alt="Ethiopia Electricity"
              className="w-6 h-6 mr-2"
            />{" "}
            Ethiopian Airlines
          </button>
          <button fullWidth className="flex items-center mb-2">
            <img
              src="/yegna.png"
              alt="Ethiopia Electricity"
              className="w-6 h-6 mr-2"
            />{" "}
            Yegna Bus Ticket
          </button>
        </SimpleGrid>
        <div className="w-full">
          <p className="mt-6 mb-4 text-sm text-gray-500">Utility</p>
        </div>
        <SimpleGrid cols={2} spacing="md">
          <button fullWidth className="flex items-center mb-2">
            <img
              src="/elpa.jpg"
              alt="Ethiopia Electricity"
              className="w-6 h-6 mr-2"
            />{" "}
            ELPA
          </button>
          <button fullWidth className="flex items-center mb-2">
            <img src="/wuha.png" alt="Ethiopia wuha" className="w-6 h-6 mr-2" />{" "}
            Wuha Limat
          </button>
          <button fullWidth className="flex items-center mb-2 ">
            {" "}
            <img
              src="/tele.jpg"
              alt="Ethiopia tele"
              className="w-6 h-6 mr-2"
            />{" "}
            EthioTelecom
          </button>
          <button fullWidth className="flex items-center ">
            <img
              src="/safari.png"
              alt="Ethiopia safari"
              className="w-6 h-6 mr-2"
            />{" "}
            Safaricom
          </button>
        </SimpleGrid>
      </Card>
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around py-4 bg-white border-t border-gray-200">
        <button className="flex items-center space-x-2 text-green-500 bg-green-100 rounded-lg shadow-lg">
          <FaHome />
          <span>HOME</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500">
          <FaBars />
        </button>
        <button className="flex items-center space-x-2 text-gray-500">
          <FaMapMarkerAlt />
        </button>
        <button className="flex items-center space-x-2 text-gray-500">
          <FaUserCircle />
        </button>
      </div>
    </Container>
  );
};

export default Home;
