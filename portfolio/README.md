# Portfolio NcX

Portfolio pessoal desenvolvido com Next.js 14, React 18 e Tailwind CSS.

## 🚀 Deploy no Vercel

### Pré-requisitos

- Conta no Vercel
- Repositório no GitHub/GitLab
- Node.js 18+ instalado

### Passos para Deploy

1. **Clone o repositório**

```bash
git clone <seu-repositorio>
cd portfolio
```

2. **Instale as dependências**

```bash
npm install
```

3. **Teste o build localmente**

```bash
npm run build
```

4. **Deploy no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub/GitLab
   - Clique em "New Project"
   - Importe seu repositório
   - O Vercel detectará automaticamente que é um projeto Next.js
   - Clique em "Deploy"

### Configurações do Vercel

O projeto já está configurado com:

- `vercel.json` otimizado
- `next.config.js` simplificado
- Versões estáveis das dependências
- Página 404 personalizada
- Arquivos SEO (robots.txt, sitemap.xml)

### Estrutura do Projeto

```
src/
├── app/           # App Router do Next.js 14
├── components/    # Componentes React
└── globals.css    # Estilos globais com Tailwind CSS
```

### Tecnologias

- **Next.js 14** - Framework React
- **React 18** - Biblioteca de UI
- **Tailwind CSS 3** - Framework CSS
- **TypeScript** - Tipagem estática
- **Lucide React** - Ícones

### Scripts Disponíveis

- `npm run dev` - Desenvolvimento local
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 📝 Notas de Deploy

- ✅ Build otimizado para produção
- ✅ Configurações compatíveis com Vercel
- ✅ SEO configurado
- ✅ Página 404 personalizada
- ✅ Fontes do sistema (sem dependências externas)

## 🔧 Solução de Problemas

Se encontrar erros 404 no Vercel:

1. Verifique se o build está funcionando localmente
2. Confirme que todas as dependências estão instaladas
3. Verifique os logs de build no Vercel
4. Certifique-se de que o repositório está sincronizado

## 📞 Suporte

Para problemas de deploy, consulte:

- [Documentação do Vercel](https://vercel.com/docs)
- [Documentação do Next.js](https://nextjs.org/docs)
- [Issues do repositório](link-para-issues)
