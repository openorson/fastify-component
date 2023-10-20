import { createApp } from "@fastify-component/core";
import { authComponent } from "./auth/auth.component.js";

createApp().install(authComponent).bootstrap();
