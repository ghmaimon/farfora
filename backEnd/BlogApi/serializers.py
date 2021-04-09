from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,TaggitSerializer)
from .models import Post
from django.contrib.auth.models import  User
from rest_framework.authtoken.models import Token
from taggit.models import Tag

class TagSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class PostSerializer(TaggitSerializer,serializers.ModelSerializer):
    tags = TagListSerializerField()
    class Meta:
        model = Post
        fields = [
            'autherName',
            'title',
            'slug',
            'author',
            'body',
            'publish',
            'created',
            'updated',
            'status',
            'publishDate',
            'tags',
            'id',
        ]
        extra_kwargs = {'publish': {'read_only': True,'format':'%Y/%m/%d  %H:%M'} , 'tags':{"unique":True}}
class Userserializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        token = Token.objects.create(user=user)
        return user

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'password',
            'email',
        ]
        extra_kwargs = {'password': {'write_only': True, 'min_length': 8, 'required': True}}
