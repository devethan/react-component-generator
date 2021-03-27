#!/usr/bin/env node

import { cli } from "./cli";

cli(process.argv).catch(console.error);
