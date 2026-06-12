import axiosInstance from "@/untils/axios";
import { ToastSetting } from "@/types/toast";
import { siteConfig } from "@/config/default.config";

export const getToast = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL ?? "https://datxecongnghe.io.vn"}/api/toast-setting`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Origin: siteConfig.domain ?? process.env.NEXT_PUBLIC_BASE_URL,
    },
  });
  const res = await response.json();
  return res;
};

export const updateToast = async (id: string, data: Partial<ToastSetting>) => {
  const res = await axiosInstance.put(`/api/toast-setting/${id}`, data);
  return res.data;
};

export const deleteToastField = async (id: string, field: string) => {
  const res = await axiosInstance.delete(`/api/toast-setting/${id}`, {
    data: { field },
  });
  return res.data;
};

export const createToast = async (data: ToastSetting) => {
  const res = await axiosInstance.post(`/api/toast-setting`, data);
  return res.data;
};
