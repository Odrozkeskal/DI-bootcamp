PGDMP                      |           countries_db    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16746    countries_db    DATABASE     �   CREATE DATABASE countries_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE countries_db;
                postgres    false            �            1259    16748 	   countries    TABLE     �   CREATE TABLE public.countries (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    capital character varying(100),
    flag text,
    subregion character varying(100),
    population bigint
);
    DROP TABLE public.countries;
       public         heap    postgres    false            �            1259    16747    countries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.countries_id_seq;
       public          postgres    false    216            �           0    0    countries_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.countries_id_seq OWNED BY public.countries.id;
          public          postgres    false    215                       2604    16751    countries id    DEFAULT     l   ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_seq'::regclass);
 ;   ALTER TABLE public.countries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16748 	   countries 
   TABLE DATA           S   COPY public.countries (id, name, capital, flag, subregion, population) FROM stdin;
    public          postgres    false    216          �           0    0    countries_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.countries_id_seq', 10, true);
          public          postgres    false    215                       2606    16755    countries countries_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.countries DROP CONSTRAINT countries_pkey;
       public            postgres    false    216            �   �  x�}RKn�0]���"Jԏ��vk�hku�n#��K����� �XhM� �r@��N�֠+h�Ak-��[u���v2���tu#�Z��ЈTU8�m@��� eERĘ��Ԩd�� �>))@�2��B}��?7P�rV0��\���h�&.{��A�qF�)m{�e��i��2��i���ڮ)��b�@�W,7
��,�b䍀P�\��2O��b{7V$#YM����ڃ�:��AT Cs�2��[x��핻�[]���MR���xh�N7�j����<MS���Ys���07������&��H�8c�˺^5������k+���\���w�9���[���	�v�h���F� ���{�^��Vo�c���K��&�D?���	�,7��Н�uO0(ky�}|��$�]r崌p�<ph�q��5���ڌ���V����)�� ���     