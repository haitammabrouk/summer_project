import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Bar } from "react-chartjs-2";
import axios from "axios";

function Graphe() {
    const [moyennesData, setMoyennesData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        axios.get("/moyenotefil")
            .then((response) => {
                const labels = Object.keys(response.data);
                const data = Object.values(response.data);

                const moyennesDataSet = {
                    label: "Moyennes par Filière",
                    data: data,
                    backgroundColor: "rgba(0, 123, 255, 0.6)", 
                };

                const dataSource = {
                    labels: labels,
                    datasets: [moyennesDataSet],
                };

                setMoyennesData(dataSource);
            })
            .catch((error) => {
                console.error("Erreur ", error);
            });
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Moyennes par Filière",
            },
        },
        scales: {
            y: {
                type: "linear", // Use "linear" scale type
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Moyenne",
                },
            },
        },
    };
    

    return (
        <Card style={{ width: 500, height: 250 }}>
            <Bar options={options} data={moyennesData} />
        </Card>
    );
}

export default Graphe;