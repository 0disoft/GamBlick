import { defineDb, defineTable, column } from 'astro:db';

const Users = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    username: column.text({ unique: true }),
    email: column.text({ unique: true }),
    password: column.text(),
    createdAt: column.date({ default: new Date() }),
  },
});

const Games = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text({ unique: true }),
    slug: column.text({ unique: true }),
    description: column.text(),
    category: column.text(),
    thumbnail: column.text(),
    playCount: column.number({ default: 0 }),
    createdAt: column.date({ default: new Date() }),
  },
});

const Scores = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    gameId: column.text({ references: () => Games.columns.id }),
    userId: column.text({ references: () => Users.columns.id }),
    score: column.number(),
    playedAt: column.date({ default: new Date() }),
  },
});

export default defineDb({
  tables: {
    Users,
    Games,
    Scores,
  },
});