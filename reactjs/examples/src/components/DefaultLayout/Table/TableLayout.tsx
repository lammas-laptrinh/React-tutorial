import React, { useEffect, useState } from 'react';
import { Table, Divider,Popconfirm,Space, Tag  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Avatar from 'react-avatar';
import { db } from '../../../firebase';
import firebase from "firebase/app";

import {
    CollectionReference,
    Timestamp,
    collection,
    onSnapshot,
    query,
} from "firebase/firestore";


const TableLayout: React.FC = () => {
    interface DataType {
        key: React.Key;
        name: string;
        avatar: string;
        phone: string;
        status: string;
        type: string;
        checkIn: Timestamp;
        checkOut: Timestamp;
    }

    const handleDelete = (key: React.Key) => {
        const newData = database.filter((item) => item.key !== key);
        setDatabase(newData);
      };
    const columns: ColumnsType<DataType> = [
        {
            title: "Avatar",
            dataIndex: "avatar",
            render: (avatar: string) => <Avatar src={avatar} size="40" round={true} />
        },
        {
            title: "name",
            dataIndex: "name",
        },
        {
            title: "phone",
            dataIndex: "phone",
        },
        {
            title: "Type",
            dataIndex: "type",
        },
        {
            title: "CheckIn",
            dataIndex: "checkIn",
            render: (text, record) => formatDateTime(record.checkIn)
        },
        {
            title: "CheckOut",
            dataIndex: "checkOut",
            render: (text, record) => formatDateTime(record.checkOut)
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text) => (
                <Tag color="green" >{text}</Tag>
              ),
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record: { key: React.Key }) =>
              database.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                  <a>Delete</a>
                </Popconfirm>
              ) : null,
          },
    ];
    function formatDateTime(timestamp: { seconds: number, nanoseconds: number }) {
      const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

    const [database, setDatabase] = useState<DataType[]>([]);
    useEffect(() => {
      const colRef: CollectionReference = collection(db, "customer");
      const queries = query(colRef);
      const unsubscribe = onSnapshot(queries, (snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const req = doc.data();
          return {
            key: doc.id,
            name: req.Name,
            avatar: req.Avatar,
            phone: req.Phone,
            status:req.Status,
            type: req.Type,
            checkIn: req.CheckIn,
            checkOut: req.CheckOut,
          };
        });     
        setDatabase(data);
      });
      return () => unsubscribe();
    }, []);
    return (
        <React.Fragment>
            <Table columns={columns} dataSource={database} size="middle" />
        </React.Fragment>
    );
};

export default TableLayout;