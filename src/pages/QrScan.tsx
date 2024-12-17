import React from "react";
import { Card, Group, Text, Container, SimpleGrid } from "@mantine/core";
import { FaHome, FaBars, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import {
  IoIosSend,
  IoMdArrowBack,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { MdCallReceived } from "react-icons/md";
import { PiHandWithdrawFill } from "react-icons/pi";

const QrScan: React.FC = () => {
  return (
    <Container className="max-w-xs p-5 mx-auto mt-4">
      <div className="flex items-center justify-between mx-auto my-5 mt-4 space-x-4 text-center">
        <button className="flex items-center p-2 text-white border-none rounded">
          <IoMdArrowBack color="black" />
        </button>
        <button className="flex items-center p-2 text-white border-none rounded">
          <IoIosNotificationsOutline color="black" />
        </button>
      </div>

      <Card padding="lg" className="mb-4">
        <p className="mb-4 text-lg font-bold text-left text-gray-700">
          Scan QR Code
        </p>
        <Card.Section>
          <div className="p-4 mx-6 text-left bg-white border border-gray-600 rounded-md pt-14">
            <img
              src="/qr-code.png"
              alt="QR Code"
              width={150}
              height={150}
              className="mx-auto mb-6"
            />
            <p className="w-3/4 mx-auto text-sm text-center text-black">
              Ask your friend to to scan this QR Code and send you cash.
            </p>
          </div>
        </Card.Section>
        <Card.Section>
          <div className="p-4 mx-6 mt-5 text-left bg-white border border-gray-600 rounded-md pt-14">
            <img
              src="/mobile_alt.png"
              alt="QR Code"
              width={150}
              height={150}
              className="mx-auto mb-6"
            />
            <p className="w-3/4 mx-auto text-sm text-center text-black">
              Click here to scan your friend’s phone and send them cash.
            </p>
          </div>
        </Card.Section>
      </Card>
    </Container>
  );
};

export default QrScan;
