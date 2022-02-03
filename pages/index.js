import React from "react";
import TopSimple from "../components/topSimple";
import Home from "./home";
import { useRecoilValue } from 'recoil';
import { memberState } from '../context/member';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index() {
  const member = useRecoilValue(memberState);
  const router = useRouter();
  useEffect(() => {
    if (!member) {
      router.push('/login')
    }
  }, [member])
  return (
    <div className="mx-auto min-w-full">
      <TopSimple/>
      <Home />

    </div>
  );
}
