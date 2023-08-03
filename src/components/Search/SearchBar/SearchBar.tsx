import { Button } from "@components/Button";
import { Search } from "@mui/icons-material";
import classNames from "classnames";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  SearchBarValidationSchema,
  searchBarValidationSchema,
} from "./validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export type SearchBarSize = "md" | "lg";

export type SearchBarProps = {
  className?: string;
  isShowSubmitButton?: boolean;
  size?: SearchBarSize;
  onSubmit?: (value: string) => void;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

const searchBarSizeMap: Record<SearchBarSize, string> = {
  md: "px-8",
  lg: "px-12",
};

const searchBarHeightMap: Record<SearchBarSize, string> = {
  md: "!h-[36px]",
  lg: "!h-48",
};

export const SearchBar = ({
  className,
  isShowSubmitButton,
  size = "md",
  onSubmit,
  onChange,
  onFocus,
  onBlur,
}: SearchBarProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const formMethods = useForm<SearchBarValidationSchema>({
    mode: "all",
    resolver: zodResolver(searchBarValidationSchema),
  });

  const { control } = formMethods;

  return (
    <div
      className={classNames(
        "flex h-max w-full items-center justify-between gap-6"
      )}
    >
      <Controller
        control={control}
        name="searchValue"
        render={({
          field: {
            value,
            onChange: onFieldChange,
            onBlur: onFieldBlur,
            ...field
          },
          formState: { isValid },
        }) => {
          const isActive = !!(isFocus || value);
          return (
            <>
              <div
                className={classNames(
                  "flex w-full items-center justify-between gap-10 rounded-6 bg-gray-200 duration-200",
                  searchBarSizeMap[size],
                  isActive ? "text-gray-800" : "text-gray-400",
                  className
                )}
              >
                <Search className="h-24 w-24 text-24" />

                <input
                  {...field}
                  className={classNames(
                    "w-full bg-[transparent] font-normal placeholder:duration-200 focus:outline-none",
                    searchBarHeightMap[size],
                    isActive ? "placeholder-gray-800" : "placeholder-gray-400"
                  )}
                  type="text"
                  placeholder="수록곡, 노래책, 스트리머 검색어 입력"
                  onChange={(e) => {
                    onFieldChange(e);
                    onChange && onChange(e.target.value);
                  }}
                  onFocus={() => {
                    setIsFocus(true);
                    onFocus && onFocus();
                  }}
                  onBlur={() => {
                    setIsFocus(false);
                    onFieldBlur();
                    onBlur && onBlur();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && isValid) {
                      onSubmit && onSubmit(value);
                    }
                  }}
                />
              </div>
              {isShowSubmitButton && value && (
                <Button
                  variant="solid"
                  color="primary"
                  size="md"
                  className={searchBarHeightMap[size]}
                  disabled={!isValid}
                  onClick={() => {
                    onSubmit && onSubmit(value);
                  }}
                >
                  검색
                </Button>
              )}
            </>
          );
        }}
      />
    </div>
  );
};
