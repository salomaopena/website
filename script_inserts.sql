# Inserir dados na tabela das categorias
INSERT INTO categories (name, slug, created_at, updated_at, deleted_at) VALUES
('Floresta Amazônica', 'floresta-amazonica', NOW(), NOW(), NULL),
('Oceano Atlântico', 'oceano-atlantico', NOW(), NOW(), NULL),
('Deserto do Saara', 'deserto-do-saara', NOW(), NOW(), NULL),
('Montanhas Rochosas', 'montanhas-rochosas', NOW(), NOW(), NULL),
('Grande Barreira de Coral', 'grande-barreira-de-coral', NOW(), NOW(), NULL),
('Rio Nilo', 'rio-nilo', NOW(), NOW(), NULL),
('Lago Baikal', 'lago-baikal', NOW(), NOW(), NULL),
('Pântano do Everglades', 'pantano-do-everglades', NOW(), NOW(), NULL),
('Floresta Negra', 'floresta-negra', NOW(), NOW(), NULL),
('Monte Everest', 'monte-everest', NOW(), NOW(), NULL);

#Inserir dados na tabelas dos users
INSERT INTO users (first_name, last_name, email, passwd, role, reset_token, reset_token_expire, created_at, updated_at, deleted_at) VALUES
('Alice', 'Silva', 'alice.silva@email.com', SHA2('senha123', 256), 'admin', NULL, NULL, NOW(), NOW(), NULL),
('Bruno', 'Ferreira', 'bruno.ferreira@email.com', SHA2('senha123', 256), 'editor', NULL, NULL, NOW(), NOW(), NULL),
('Carlos', 'Santos', 'carlos.santos@email.com', SHA2('senha123', 256), 'author', NULL, NULL, NOW(), NOW(), NULL),
('Daniela', 'Lima', 'daniela.lima@email.com', SHA2('senha123', 256), 'user', NULL, NULL, NOW(), NOW(), NULL),
('Eduardo', 'Costa', 'eduardo.costa@email.com', SHA2('senha123', 256), 'user', NULL, NULL, NOW(), NOW(), NULL),
('Fernanda', 'Oliveira', 'fernanda.oliveira@email.com', SHA2('senha123', 256), 'author', NULL, NULL, NOW(), NOW(), NULL),
('Gabriel', 'Martins', 'gabriel.martins@email.com', SHA2('senha123', 256), 'editor', NULL, NULL, NOW(), NOW(), NULL),
('Helena', 'Pereira', 'helena.pereira@email.com', SHA2('senha123', 256), 'user', NULL, NULL, NOW(), NOW(), NULL),
('Igor', 'Rodrigues', 'igor.rodrigues@email.com', SHA2('senha123', 256), 'admin', NULL, NULL, NOW(), NOW(), NULL),
('Juliana', 'Alves', 'juliana.alves@email.com', SHA2('senha123', 256), 'user', NULL, NULL, NOW(), NOW(), NULL);

#INSERIR DADOS NA TABELA NOTÍCIAS
INSERT INTO news (title, slug, content, image, created_at, updated_at, deleted_at, author_id, category_id) VALUES
('Novo Parque Nacional é Criado', 'novo-parque-nacional', 'O governo anunciou a criação de um novo parque nacional para proteger a biodiversidade.', 'parque.jpg', NOW(), NOW(), NULL, 1, 2),
('Poluição nos Oceanos', 'poluicao-oceanos', 'Estudos recentes mostram que a poluição nos oceanos está aumentando rapidamente.', 'oceano.jpg', NOW(), NOW(), NULL, 2, 3),
('Mudanças Climáticas Afetam Agricultura', 'mudancas-climaticas-agricultura', 'Agricultores relatam impactos significativos das mudanças climáticas em suas colheitas.', 'agricultura.jpg', NOW(), NOW(), NULL, 3, 4),
('Nova Espécie Descoberta na Amazônia', 'nova-especie-amazonia', 'Cientistas encontraram uma nova espécie de anfíbio na Floresta Amazônica.', 'amazonia.jpg', NOW(), NOW(), NULL, 4, 5),
('Desmatamento Cresce no Último Ano', 'desmatamento-cresce', 'Dados mostram um aumento de 20% no desmatamento em relação ao ano passado.', 'desmatamento.jpg', NOW(), NOW(), NULL, 5, 2),
('Tecnologia e Sustentabilidade', 'tecnologia-sustentavel', 'Novas inovações tecnológicas estão ajudando a reduzir o impacto ambiental.', 'tecnologia.jpg', NOW(), NOW(), NULL, 6, 1),
('Espécies em Extinção', 'especies-extincao', 'Uma lista atualizada revela que várias espécies estão em risco crítico de extinção.', 'extincao.jpg', NOW(), NOW(), NULL, 7, 5),
('Reciclagem e o Futuro Sustentável', 'reciclagem-futuro', 'Especialistas discutem a importância da reciclagem para um futuro mais sustentável.', 'reciclagem.jpg', NOW(), NOW(), NULL, 8, 3),
('Energia Renovável em Expansão', 'energia-renovavel-expansao', 'O uso de energia renovável cresceu 15% no último ano.', 'energia.jpg', NOW(), NOW(), NULL, 9, 4),
('Impacto das Queimadas', 'impacto-queimadas', 'Incêndios florestais têm causado grandes prejuízos ambientais e econômicos.', 'queimadas.jpg', NOW(), NOW(), NULL, 10, 2);

#INSERIR DADOS NA TABELA AVALIAÇÃO
INSERT INTO ratings (news_id, user_id, rating, created_at, updated_at, deleted_at) VALUES
(1, 1, 5, NOW(), NOW(), NULL),
(2, 2, 4, NOW(), NOW(), NULL),
(3, 3, 5, NOW(), NOW(), NULL),
(4, 4, 3, NOW(), NOW(), NULL),
(5, 5, 4, NOW(), NOW(), NULL),
(6, 6, 5, NOW(), NOW(), NULL),
(7, 7, 2, NOW(), NOW(), NULL),
(8, 8, 4, NOW(), NOW(), NULL),
(9, 9, 5, NOW(), NOW(), NULL),
(10, 10, 3, NOW(), NOW(), NULL);

#Inserir dados na tabela Comentários
INSERT INTO comments (news_id, user_id, comment, created_at, updated_at, deleted_at) VALUES
(1, 2, 'Ótima iniciativa para preservar a biodiversidade!', NOW(), NOW(), NULL),
(2, 3, 'Precisamos reduzir o plástico nos oceanos!', NOW(), NOW(), NULL),
(3, 4, 'A mudança climática já está afetando a produção de alimentos.', NOW(), NOW(), NULL),
(4, 5, 'Descobertas como essa são essenciais para a ciência.', NOW(), NOW(), NULL),
(5, 6, 'O desmatamento precisa ser controlado urgentemente.', NOW(), NOW(), NULL),
(6, 7, 'Tecnologia verde é o futuro!', NOW(), NOW(), NULL),
(7, 8, 'Precisamos proteger essas espécies antes que desapareçam.', NOW(), NOW(), NULL),
(8, 9, 'A reciclagem deve ser incentivada em todas as cidades.', NOW(), NOW(), NULL),
(9, 10, 'Investir em energia renovável é essencial para o planeta.', NOW(), NOW(), NULL),
(10, 1, 'Queimadas devem ser combatidas com mais rigor.', NOW(), NOW(), NULL);



SELECT * FROM categories;
UPDATE categories SET name = 'Floresta amazônica' WHERE id = 1;

SELECT * FROM users;
SELECT * from users where role = 'user';

SELECT * FROM news;
SELECT n.title, name, concat(u.first_name,' ',u.last_name) AS full_name FROM news n JOIN categories c ON (n.category_id=c.id) JOIN users u ON (n.author_id=u.id)
WHERE u.first_name LIKE '%J%'




