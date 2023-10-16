FROM node
WORKDIR /application
COPY package.json .
COPY package-lock.json .
ENV DATABASE_URL=postgresql://postgres:T8uapFPmb2g2HTQg@db.xdkiehxkkfqylvvqympp.supabase.co:5432/postgres
ENV SECRET=secret
RUN cd client && npm i && npm run build
RUN cd server && npm i
COPY . .
EXPOSE 4000
CMD [ "node", "server/app.js"]