FROM node
WORKDIR /application
ENV DATABASE_URL=postgresql://postgres:T8uapFPmb2g2HTQg@db.xdkiehxkkfqylvvqympp.supabase.co:5432/postgres
ENV SECRET=secret
COPY . .
RUN cd client && npm i && npm run build
RUN cd server && npm i
EXPOSE 4000
CMD [ "node", "server/app.js"]