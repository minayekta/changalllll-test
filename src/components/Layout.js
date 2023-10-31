export const Layout = ({ ...props }) => {
    return (
<div
      className="bg-[#020b1f] rounded-3xl border border-solid p-10 flex flex-col gap-7 items-center justify-start flex-1 w-[540px] relative"
      style={{
        borderImage:
          "linear-gradient(204.09deg, rgba(24, 32, 64, 1.00) 0%,rgba(24, 32, 64, 0.00) 100%)",
        borderImageSlice: "1",
        boxShadow: "24px 24px 96px 0px rgba(12, 19, 44, 1.00)",
      }}
    >
      <div className="flex flex-col gap-4 items-end justify-start self-stretch shrink-0 relative">
        <div
          className="text-surface-900 text-right relative flex items-center justify-end"
          style={{ font: "400 24px 'ABeeZee', sans-serif" }}
        >
          ویرایش کاربر{" "}
        </div>
        <div className="bg-surface-300 rounded-sm shrink-0 w-[460px] h-0.5 relative"></div>
      </div>
      <div className="rounded-[100px] border-solid border-primary-500 border-2 flex flex-row gap-0 items-start justify-start shrink-0 w-[120px] h-[120px] relative overflow-hidden">
        <div className="rounded-[100px] p-1 flex flex-row gap-0 items-start justify-start self-stretch flex-1 relative overflow-hidden">
          <img
            className="rounded-[100px] self-stretch flex-1 relative"
            src="image2.png"
          />
        </div>
      </div>
      <div className="flex flex-row gap-7 items-center justify-center self-stretch shrink-0 relative">
        <div className="flex flex-col gap-3 items-end justify-start flex-1 relative">
          <div
            className="text-surface-500 text-right relative flex items-center justify-end"
            style={{ font: "400 italic 16px/24px 'ABeeZee', sans-serif" }}
          >
            سن{" "}
          </div>
          <div className="rounded-xl border-solid border-surface-400 border p-3 flex flex-row gap-10 items-center justify-end self-stretch shrink-0 relative">
            <div
              className="text-surface-900 text-right relative flex items-center justify-end"
              style={{ font: "400 16px/24px 'ABeeZee', sans-serif" }}
            >
              ۲۴{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-end justify-start flex-1 relative">
          <div
            className="text-surface-500 text-right relative flex items-center justify-end"
            style={{ font: "400 italic 16px/24px 'ABeeZee', sans-serif" }}
          >
            نام کاربر{" "}
          </div>
          <div className="rounded-xl border-solid border-surface-400 border p-3 flex flex-row gap-10 items-center justify-end self-stretch shrink-0 relative">
            <div
              className="text-surface-900 text-right relative flex items-center justify-end"
              style={{ font: "400 16px/24px 'ABeeZee', sans-serif" }}
            >
              پوریا زارعی{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-7 items-center justify-end self-stretch shrink-0 relative">
        <div className="flex flex-col gap-3 items-end justify-start flex-1 relative">
          <div
            className="text-surface-500 text-right relative flex items-center justify-end"
            style={{ font: "400 italic 16px/24px 'ABeeZee', sans-serif" }}
          >
            شماره تلفن{" "}
          </div>
          <div className="rounded-xl border-solid border-surface-400 border p-3 flex flex-row gap-10 items-center justify-end self-stretch shrink-0 relative">
            <div
              className="text-surface-300 text-right relative flex items-center justify-end"
              style={{ font: "400 16px/24px 'ABeeZee', sans-serif" }}
            >
              09364281574{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-end justify-start flex-1 relative">
          <div
            className="text-surface-500 text-right relative flex items-center justify-end"
            style={{ font: "400 italic 16px/24px 'ABeeZee', sans-serif" }}
          >
            ایمیل{" "}
          </div>
          <div className="rounded-xl border-solid border-surface-400 border p-3 flex flex-row gap-10 items-center justify-end self-stretch shrink-0 relative">
            <div
              className="text-surface-900 text-right relative flex items-center justify-end"
              style={{
                font: "400 14px/160% 'ABeeZee', sans-serif",
                textDecoration: "underline",
              }}
            >
              h15q77@gmail.com{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 w-[460px] h-[82px] static">
        <div className="flex flex-row gap-10 items-center justify-center w-[460px] absolute left-10 top-[486px]">
          <div className="flex flex-col gap-3 items-end justify-start flex-1 relative">
            <div
              className="text-surface-500 text-right relative flex items-center justify-end"
              style={{ font: "400 italic 16px/24px 'ABeeZee', sans-serif" }}
            >
              کد پستی{" "}
            </div>
            <div className="rounded-xl border-solid border-surface-400 border p-3 flex flex-row gap-10 items-center justify-end self-stretch shrink-0 relative">
              <div
                className="text-surface-900 text-right relative flex items-center justify-end"
                style={{ font: "400 14px/160% 'ABeeZee', sans-serif" }}
              >
                ۱۲۳۴{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-end justify-start flex-1 relative">
            <div
              className="text-surface-500 text-right relative flex items-center justify-end"
              style={{ font: "400 italic 16px/24px 'ABeeZee', sans-serif" }}
            >
              خیابان{" "}
            </div>
            <div className="rounded-xl border-solid border-surface-400 border p-3 flex flex-row gap-10 items-center justify-end self-stretch shrink-0 relative">
              <div
                className="text-surface-900 text-right relative flex items-center justify-end"
                style={{ font: "400 14px/160% 'ABeeZee', sans-serif" }}
              >
                بخارست{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-end justify-start flex-1 relative">
            <div
              className="text-surface-500 text-right relative flex items-center justify-end"
              style={{ font: "400 italic 16px/24px 'ABeeZee', sans-serif" }}
            >
              شهر{" "}
            </div>
            <div className="rounded-xl border-solid border-surface-400 border p-3 flex flex-row gap-10 items-center justify-end self-stretch shrink-0 relative">
              <div
                className="text-surface-900 text-right relative flex items-center justify-end"
                style={{ font: "400 14px/160% 'ABeeZee', sans-serif" }}
              >
                تهران{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-end justify-start flex-1 relative">
            <div
              className="text-surface-500 text-right relative flex items-center justify-end"
              style={{ font: "400 italic 16px/24px 'ABeeZee', sans-serif" }}
            >
              کشور{" "}
            </div>
            <div className="rounded-xl border-solid border-surface-400 border p-3 flex flex-row gap-10 items-center justify-end self-stretch shrink-0 relative">
              <div
                className="text-surface-900 text-right relative flex items-center justify-end"
                style={{ font: "400 14px/160% 'ABeeZee', sans-serif" }}
              >
                ایران{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-end justify-start self-stretch shrink-0 relative">
        <div
          className="text-surface-500 text-right relative flex items-center justify-end"
          style={{ font: "400 italic 16px/24px 'ABeeZee', sans-serif" }}
        >
          شرکت{" "}
        </div>
        <div className="rounded-xl border-solid border-surface-400 border p-3 flex flex-row gap-10 items-center justify-end self-stretch shrink-0 relative">
          <div
            className="text-surface-900 text-right relative flex items-center justify-end"
            style={{ font: "400 14px/160% 'ABeeZee', sans-serif" }}
          >
            پارت{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6 items-center justify-center shrink-0 w-[448px] relative">
        <div className="bg-ui-red-500 rounded-2xl pt-4 pr-6 pb-4 pl-6 flex flex-row gap-3 items-center justify-center flex-1 h-14 relative">
          <div
            className="text-ui-gray-1000 text-right relative flex items-center justify-end"
            style={{ font: "400 20px 'ABeeZee', sans-serif" }}
          >
            حذف{" "}
          </div>
        </div>
        <div
          className="bg-primary-500 rounded-2xl pt-4 pr-6 pb-4 pl-6 flex flex-row gap-3 items-center justify-center flex-1 h-14 relative"
          style={{ boxShadow: "0px 0px 24px 0px rgba(3, 54, 153, 1.00)" }}
        >
          <div
            className="text-ui-gray-1000 text-right relative flex items-center justify-end"
            style={{ font: "400 italic 20px 'ABeeZee', sans-serif" }}
          >
            ویرایش{" "}
          </div>
        </div>
      </div>
    </div>
    );
  };
  