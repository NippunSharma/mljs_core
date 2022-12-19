let instance = undefined;

export async function mljsInit() {
  const { default: instantiate } = await import("./mljs");
  instance = await instantiate();
}

export function getInstance() {
  return instance;
}
