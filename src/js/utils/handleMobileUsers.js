export const handleMobileUsers = () => {
  const isMobileRegExp = /mobile|android|iphone/i;
  const isMobile = isMobileRegExp.test(navigator.userAgent);

  if (isMobile) {
    alert("暂不支持手机端");
  }
};
