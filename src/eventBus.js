// Importa o pacote mitt para criar um EventBus (sistema de eventos customizados)
import mitt from "mitt";

// Cria uma instância do EventBus com mitt
const EventBus = mitt();

// Exportando como padrão a Instancia EventBus
export default EventBus