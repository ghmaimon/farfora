from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer,Userserializer,TagSerialiser
from django.contrib.auth.models import User
from taggit.models import Tag

from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = Userserializer
class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerialiser