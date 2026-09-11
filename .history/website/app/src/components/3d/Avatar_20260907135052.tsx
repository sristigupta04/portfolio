"use client";

import {GroupProps} from "@react-three/fiber";
import {Mesh} from "three";
import {useEffect, useRef} from "react";


export default function Avatar(props: GroupProps) {
    const hand = useRef<Mesh>(null);
    