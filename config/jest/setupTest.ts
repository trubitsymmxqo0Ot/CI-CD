import '@testing-library/jest-dom'
import 'whatwg-fetch';
import { TextEncoder, TextDecoder } from "text-encoding";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;